function century(year) {
 var cen=year/100
  if(year%100>0){
    return Math.ceil(cen)
    
    
  }else{
  return cen
  };
}
