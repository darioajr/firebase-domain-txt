import * as functions from 'firebase-functions';
import * as dns from "dns";

export const getAllTXT = functions.https.onRequest((request, response) => {
    let domain: any;
    domain = request.query.addresses;
    dns.resolveTxt(domain, function (err, addresses) {
            response.send(`TXT records: ${addresses}`);
            response.json({ result: `TXT records: ${addresses}` });
            functions.logger.info('TXT records: %j', addresses, { structuredData: true });
        }
});

