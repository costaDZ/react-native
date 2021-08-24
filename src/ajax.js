const apiHost = "https://bakesaleforgood.com";

export default {
    async getMoviesFromApi() {
        try {
            const response = await fetch(apiHost + '/api/deals');
            const resposeJson = await response.json();
            return resposeJson;
        } catch (error) {
            console.error(error);
        }
    },
    async fetchDealDetail(dealId) {
        try {
            const response = await fetch(apiHost + '/api/deals/' + dealId);
            const resposeJson = await response.json();
            return resposeJson;
        } catch (error) {
            console.error(error);
        }
    },
}

