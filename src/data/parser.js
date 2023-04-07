import event_data from '../mock/event_data.json'

export const courses =  event_data.filter(function (i, datum){
    return datum.typeEvent === "cours"
})

export const td_tp = event_data.filter(function(i, datum){
    return datum.typeEvent === "td" || datum.typeEvent === "tp"
})