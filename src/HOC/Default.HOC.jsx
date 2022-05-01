// import React from "react";
import { Route }  from "react-router-dom";

//Layout
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ Component: Component, ...rest }) => {
    return ( 
        <>
            <Route 
                {...rest}
                    component={(props) => (
                        <DefaultLayout>
                            <Component {...props} />
                        </DefaultLayout>
                )}
            />
        </>
    );
};

export default DefaultHOC;