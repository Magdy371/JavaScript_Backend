function isValidIPv4(ipv4) {
  const parts = ipv4.split(".");
  if(parts.length !== 4){
    return false;
  }
  for(const part of parts){
    if (!/^\d+$/.test(part)) {
      return false;
    }
    if (part.length > 1 && part.startsWith('0')) {
      return false;
    }
    const  num = Number(part);
    if(num < 0 || num > 255){
      return false
    }
  }
  return true;
}