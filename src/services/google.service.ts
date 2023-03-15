import { BLOGS_FOLDER_ID, GAPIS_API_KEY, GAPIS_EMAIL_ID, GAPIS_PERMISSIONS, GAPIS_PRIVATE_KEY } from '@/config';
import { google } from 'googleapis'
// console.log(GAPIS_API_KEY, GAPIS_EMAIL_ID, GAPIS_PRIVATE_KEY)
const apikey = GAPIS_API_KEY
const auth = new google.auth.JWT(
    GAPIS_EMAIL_ID,
    null,
    GAPIS_PRIVATE_KEY,
    [GAPIS_PERMISSIONS],
);
const drive = google.drive({
    auth: auth,
    version: 'v3'
})

const FOLDER_ID = BLOGS_FOLDER_ID;
export interface blogPost{
    title:string;
    publishedLink:string;
    tags:string[]
    summary:string;
}
class GoogleService {
    private static getPublishedLink(docid:string,embed=true){
        return `https://docs.google.com/document/d/${docid}/pub`+(embed?'?embedded=true':'');
    }
    public static async getBlogs() {
        const allBlogPosts:blogPost[] = [];
        const response = await drive.files.list({
            q: `'${FOLDER_ID}' in parents`,
            fields: 'nextPageToken, files(id, name, createdTime, modifiedTime, mimeType, contentHints, description)',
        })
        const files = response.data.files;
        // return;
        for (let file of files) {
            const body = {
                resource: {
                    published: true,
                    publishedOutsideDomain: true,
                    publishAuto: true
                },
                fileId: file.id,
                revisionId: 1
            };
            const shortcutId = file.id;

            const params = {
                fileId: shortcutId,
                fields: 'shortcutDetails',
                supportsAllDrives: true,
            };
            let summary = '';
            let tags = [];
            if(file.description!==undefined&&file.description.length>0){
                const metadata = JSON.parse(file.description)
                summary = metadata.summary;
                tags = metadata.tags;
            }
            const blogpost:blogPost = {
                title:file.name,
                summary:summary,
                publishedLink:this.getPublishedLink(file.id),
                tags:tags
            }
            if (file.mimeType === 'application/vnd.google-apps.shortcut') {
                const shortcutDetailsResponse = await drive.files.get(params)
                    // console.log(response.data.shortcutDetails)
                const targetId = shortcutDetailsResponse.data.shortcutDetails.targetId;
                blogpost.publishedLink = this.getPublishedLink(targetId);
            }
            allBlogPosts.push(blogpost)
        }
        // console.log(allBlogPosts)
        return allBlogPosts;
    }
}
export default GoogleService;