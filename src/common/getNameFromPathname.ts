

export const getTypeFromPathname = (pathname:string) => {
    const currentPathname = pathname;
    const typeProduct = currentPathname.substring(
      currentPathname.indexOf("/") + 1,
      currentPathname.lastIndexOf("/")
    );
    // console.log(typeProduct);
    return typeProduct
}

export default function getNameFromPathname (pathname:string) {
    const currentPathname = pathname;
    const name = currentPathname.substring(
        currentPathname.lastIndexOf("/") + 1,
    )
    const nameProduct = name.replaceAll('-', ' ')
    // console.log(nameProduct);
    return nameProduct
}