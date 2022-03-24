const plans = [
  {name: 'Flat', variableRate: '0.234', dayRate: '0.5', startDate: '2021-01-01', endDate: '2025-01-01', id: '6'},
  {name: 'Off Peak', variableRate: '0.226', dayRate: '0.5', startDate: '2021-01-01', endDate: '2025-01-01', id: '5'},
  {name: 'Business', variableRate: '0.130', dayRate: '1.0', startDate: '2021-01-01', endDate: '2025-01-01', id: '4'},
  {name: 'Wholesale', variableRate: '0.301', dayRate: '0.5', startDate: '2021-01-01', endDate: '2025-01-01', id: '3'},
  {name: 'Flat', variableRate: '0.264', dayRate: '0.5', startDate: '2020-01-01', endDate: '2021-01-01', id: '2'},
  {name: 'Off Peak', variableRate: '0.209', dayRate: '0.5', startDate: '2020-01-01', endDate: '2021-01-01', id: '1'}
]
1. Return an array of plans excluding any that have end dates in the past, these are the active plans.

let date='2022-03-23'
const activePlans = plans.filter((item) => item.endDate >= date)

2. Return the active plans ordered by their name alphabetically.

const newActivePlans = activePlans.sort((a, b) => a.name.localeCompare(b.name))

3.Return the rate of the active Off Peak plan.

const activeOffPeakPlan=activePlans.find((item)=>{
    if(item.name=='Off Peak')
    return item
   })
const rate=Number(activeOffPeakPlan.variableRate)+Number(activeOffPeakPlan.dayRate)

4.Return the cost for a customer for a 7 day period where they use 29kWh of electricity on the current active Flat plan.

const activeFlatPlan=activePlans.find((item)=>{
    if(item.name=='Flat')
    return item
   })
const rate=Number(activeFlatPlan.variableRate)+Number(activeFlatPlan.dayRate)
const cost=rate*29*7

5.Return which plan a customer will pay the least amount for 7 days and 29kWh of electricity used.

 let rateOfActivePlan=[]
 let element={}
 activePlans.map((item)=>{
    let rate=Number(item.variableRate)+Number(item.dayRate)
     element={name: item.name, rate: rate}
    rateOfActivePlan.push(element)
   })

const sortedRateOfActivePlan=rateOfActivePlan.sort((a,b)=> a.rate-b.rate)

console.log(sortedRateOfActivePlan[0].name)