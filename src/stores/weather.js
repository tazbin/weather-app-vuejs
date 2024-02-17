import { defineStore } from "pinia";
import { GET_WEATHER_AND_FORCAST_URL } from '@constants/apiEndPoints'
import { ref } from 'vue'
import makeApiRequest from "@services/http";

export const useWeatherStore = defineStore('weather', () => {

    const weatherInfo = ref({})

    const getWeatherInfo = async (locationId = 174248) => {
        let url = GET_WEATHER_AND_FORCAST_URL + `?id=${locationId}`;
        try {
            const response = await makeApiRequest({
                url,
            })
            weatherInfo.value = response.data
        } catch (err) {
            console.log(err.response.data.error.message)
        }
    }

    return {
        weatherInfo,
        getWeatherInfo
    }

})