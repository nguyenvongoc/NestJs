import {Controller, Get }   from '@nestjs/common';

@Controller('/app')
export class AppController {
    @Get('/hi')
    getRootRoute() {
        return 'hi there VoNgoc QB' ;
    }

    @Get('/bye')
    getbyeRoute() {
        return 'bye there VoNgocQB' ;
    }
}