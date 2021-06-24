import {$host} from './index';

export const getUsersData = async page => {
    if (!page) {
        page = 1
    }
    return await $host.get(`/api/data/user_data?perPage=${30}&page=${page}`)
}

export const getUserById = async id => {
    return await $host.get(`/api/data/users/${id}`)
};

export const getUserStatistic = async id => {
    return await $host.get(`/api/data/user_statistic/${id}`)
}

export const getFirstDate = async id => {
    return await $host.get(`/api/data/getFirstWeekDate/${id}`)
}

export const getStatisticByDate = async (id, fromDate, inWeek) => {
    return await $host.get(`/api/data/getStatisticByDate/${id}?fromDate=${fromDate}&inWeek=${inWeek}`)
}