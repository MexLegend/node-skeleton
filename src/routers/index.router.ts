import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { notFoundError } from '@helpers/error.helper';

const router = Router();

const pathRouter = `${__dirname}`;

const removeExtension = (fileName: string) => {
    return fileName.split('.').shift();
}

fs.readdirSync(pathRouter).filter(async file => {
    const fileWithoutExtension = removeExtension(file);

    if (fileWithoutExtension && !fileWithoutExtension.includes('index')) {
        try {
            const routePath = path.join(pathRouter, fileWithoutExtension + '.router');
            const module = await import(routePath);
            router.use(`/${fileWithoutExtension}`, module.default);
        } catch (error) {
            notFoundError((error as Error).message, 'LOAD_ROUTE_ERROR');

        }
    }
});

router.get('*', () => {
    notFoundError('Route Not found', 'ROUTE_NOT_FOUND');
});

export default router;