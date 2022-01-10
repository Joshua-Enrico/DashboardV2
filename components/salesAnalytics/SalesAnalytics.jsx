import { SalesAnalyticsContainer, H2, AddProduct, Div, H3 } from "./Style"
import Item from "./item/Item"
import { Data } from "./Data"
import { GrAdd } from 'react-icons/gr'


const SalesAnalytics = () => {
    return (
        <SalesAnalyticsContainer>
            <H2>Sales Analytics</H2>
            {Data?.map(({ id, Title, Percentage, Value}) => (
                <Item
                    key={id}
                    Title={Title}
                    Percentage={Percentage}
                    Value={Value}
                 />
            ))}
            <AddProduct>
                    <Div>
                        <GrAdd />
                        <H3>Add Product</H3>
                    </Div>
            </AddProduct>
        </SalesAnalyticsContainer>
    )
}

export default SalesAnalytics
