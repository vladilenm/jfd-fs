import httpService from "./http.service";

const professionEndpoint = "profession/";

const professionService = {
    get: async () => {
        const req = await httpService.get(professionEndpoint);
        return req.data;
    }
};
export default professionService;
