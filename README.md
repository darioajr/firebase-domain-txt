# firebase-domain-txt
Firebase Cloud Function to check existing TXT in domain

# build
npm run build

# emulator tests
firebase emulators:start
http://localhost:5001/firebase-domain-txt/us-central1/getAllTXT?addresses=incident.com.br

# deploy
firebase deploy --only functions