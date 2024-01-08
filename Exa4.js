function Exa4(){
    const programing=["KD","HD","PR","HK"]
    return(
        <>
        {
            programing.length?
            (programing.map(function(v,i){
                return<li key={i}>{v}</li>;
            }))
        :"No Record Found"
        }
        </>
    )
}
export default Exa4;