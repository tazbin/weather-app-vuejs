import makeApiRequest from "@services/http";
import { defineStore } from "pinia";
import { LOCATION_SEARCH_URL } from '@constants/apiEndPoints'
import { ref } from "vue";

export const useLocationStore = defineStore('location', () => {

    const locations = ref('')
    const searchLocation = async (name) => {
        let url = LOCATION_SEARCH_URL + `?name=${name}`;
        try {
            const response = await makeApiRequest({
                url,
            })
            locations.value = response.data
        } catch (err) {
            console.log(err.response.data)
        }
    }

    return {
        locations,
        searchLocation
    }
})