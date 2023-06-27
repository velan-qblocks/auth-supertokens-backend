const supertokens = require('supertokens-node');
const ThirdPartyPasswordless = require('supertokens-node/recipe/thirdpartypasswordless');
const Session = require('supertokens-node/recipe/session');

supertokens.init({
   framework: 'express',
   supertokens: {
      connectionURI: process.env.SUPERTOKENS_CONNECTION_URI,
      apiKey: process.env.SUPERTOKENS_API_KEY,
   },
   appInfo: {
      appName: 'Auth-App',
      apiDomain: 'http://localhost:8000',
      websiteDomain: 'http://localhost:3000',
      apiBasePath: '/auth',
      websiteBasePath: '/auth',
   },
   recipeList: [
      ThirdPartyPasswordless.init({
         flowType: 'USER_INPUT_CODE_AND_MAGIC_LINK',
         contactMethod: 'EMAIL',

         providers: [
            ThirdPartyPasswordless.Google({
               clientId: '1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com',
               clientSecret: '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',
            }),
            ThirdPartyPasswordless.Github({
               clientId: '467101b197249757c71f',
               clientSecret: 'e97051221f4b6426e8fe8d51486396703012f5bd',
            }),
         ],
      }),
      Session.init(), 
   ],
});

module.exports = supertokens;
