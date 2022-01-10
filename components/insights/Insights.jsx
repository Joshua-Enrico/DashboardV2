import React from 'react'
import InsightCards from './Insightcards/InsightCards'
import { InsightContainer } from './Style'

import { Data } from "./Data"



const Insights = () => {
    console.log(Data)
    return (
        <InsightContainer>
            {Data?.map(({ id, Title, Value, Percentage, Icon }) => (
                <InsightCards
                key={id}
                Title={Title}
                Value={Value}
                Icon={Icon}
                Percentage={Percentage}
                />
            ))}
        </InsightContainer>
    )
}

export default Insights
