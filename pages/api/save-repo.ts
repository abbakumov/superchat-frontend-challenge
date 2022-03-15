import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from 'octokit';

import { GITHUB_API_KEY, GITHUB_USER_AGENT } from '../../common/variables';
import type { RepoData } from '../../common/types/repo-data';

import database from '../../database';

const octokit = new Octokit({
    auth: GITHUB_API_KEY,
    userAgent: GITHUB_USER_AGENT,
});

type ResponseData = {
    isSuccessful: boolean,
    repoId: string,
    errorText: string,
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>,
) {
    if (req.method !== 'POST') {
        res.status(400);
        return;
    }

    // TODO: check types of req.body
    const repoData = req.body as RepoData;
    const { user, repo } = repoData;

    try {
        await octokit.rest.repos.get({
            owner: user,
            repo,
        });
        // if no error occurred then repo is and we save it to database with icon and color index
        const repoLocalIndex = database.addItem(repoData);
        res.status(200).json({
            repoId: repoLocalIndex,
            isSuccessful: true,
            errorText: '',
        });
    } catch (e) {
        // Lets simplify all the error handling and just return 404
        // assuming we get error because no repository was found
        // Request error handling is the huge project :)
        res.status(404).json({
            repoId: '',
            isSuccessful: false,
            errorText: 'User or repo not found!',
        });
    }
}
