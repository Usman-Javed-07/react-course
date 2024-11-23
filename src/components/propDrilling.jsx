 export const PropDrilling = ()=> {

    return (
        <section className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white`}> 

            <h1>component A </h1>
            <ChildComponent data="react js"/>
        </section>
    )
 }

 const ChildComponent = (props)=> {
    return (
    <>
    
    <h1> hello i am component B</h1>
    <GrandChildComponent data={props.data}/>
    
    </>
    )
 }
 const  GrandChildComponent = (props)=> {
    return (
        <>
         <h1>hello i am component c</h1>
         <GreatGrandChildComponent data = {props.data}/>
        </>
    )
 }
 const  GreatGrandChildComponent = (props)=> {
    return (
        <>
        <h1> i love {props.data}</h1>
        </>
    )
 }