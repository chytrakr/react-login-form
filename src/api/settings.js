let env = "dev";
let apiEnv = "dev/";
// let apiEnv = "prod/";
export const API_HOST = "http://localhost:3000/";

// Google client IDs
let GoogleClientIDs = {
  local:
    "add-localhost-client-id-here",
  dev: "add-dev-client-id-here",
  prod: "add-prod-client-id-here",
};

export const API = API_HOST + apiEnv;
export const GoogleClientID = GoogleClientIDs[env];
