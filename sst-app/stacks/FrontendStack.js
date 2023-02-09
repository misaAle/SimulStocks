import { StaticSite, use } from "@serverless-stack/resources";
// import { ApiStack } from "./ApiStack";

export function FrontendStack({ stack, app}) {
    // const { apistack } = use(ApiStack);

    const site = new StaticSite(stack, "Reactsite", {
        path: "frontend",

        // environment: {
        //     REACT_APP_API_URL: mystack.customDomainUrl || mystack.url,
        //     REACT_APP_REGION: app.region,
        // },
    });

    stack.addOutputs({
        SiteUrl: site.url,
    });
}