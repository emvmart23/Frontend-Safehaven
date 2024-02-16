// import { ComponentProps, ComponentType, FC } from "react"

// type Providers = [ComponentType<any>, ComponentProps<any>?][];

// const combineProviders = (providers: Providers): FC => providers.reduce((AccumulatedProviders, [Provider, props = {}]) => (children) => (
//     <AccumulatedProviders>
//       <Provider {...props}>
//         <>{children}</>
//       </Provider>
//     </AccumulatedProviders>
//   ),
//   ( children ) => <>{children}</>
// );
