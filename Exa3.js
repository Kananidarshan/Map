function Exa3(){
    const programing=["Darshan","Vishal","Mahesh","Shyam"]
    let msg;
    if(programing.length<2){
        msg=programing.map(function(v,i){
            return<li key={i}>{v}</li>;
        });
    }else{
        msg="No Records Found";
    }
    return(
        <>
            {msg}
        </>
    )
}
export default Exa3;