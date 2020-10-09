import * as functions from 'firebase-functions';
import * as dns from 'dns';

exports.getAllTXT = functions.https.onRequest((request, response) => {
    const domain: any = request.query.addresses;
    dns.resolveTxt(domain, (err, addresses) => {
            response.send(`TXT records: ${addresses}`);
            response.json({ result: `TXT records: ${addresses}` });
            functions.logger.info('TXT records: %j', addresses, { structuredData: true });
    });
});

