import http from 'http';
import path from 'path';
import { getFileContent } from './helpers/server_file.js';

const PORT = 3400;

const server = http.createServer(async(req,res)=>{

    if(req.url.startsWith('/css/')){
        return getFileContent(res, path.join('public', 'css','style.css'), '.css')
    }
    if(req.url.startsWith('/images/')){
        const fileName = path.basename(req.url);
        const ext = path.extname(fileName); 
        return getFileContent(res, path.join('public', 'images', fileName), ext);
    }
    if(req.url.startsWith('/videos/')){
        return getFileContent(res, path.join('public','images', 'videos', 'video_s.mp4'), '.mp4');
    }
     if(req.url.startsWith('/favicon/')){
        return getFileContent(res, path.join('public','favicon', 'favicon.ico'), '.ico');
    }
    if(req.url === '/'){
        return getFileContent(res, path.join('public', 'html','index.html'), '.html')
    }
})

server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})




