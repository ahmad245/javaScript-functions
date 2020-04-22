
let r=10;
const calcTax=(tax)=>{

    console.log(r);
    
    const calctaxForAmount=(amount)=>{
        console.log(r);
        
       return tax * amount;
    }
    return calctaxForAmount;
}

let calcTaxForCpu=calcTax(0.5);
let calcTaxForCaf=calcTax(0.9);
r=20;
calcTaxForCpu(100);
calcTaxForCpu(1150);

calcTaxForCaf(52);
calcTaxForCaf(70);