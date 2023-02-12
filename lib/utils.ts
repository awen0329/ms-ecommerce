/** @format */

export function getProductImageUrl(image: string) {
  return image
    ? `https://d1ax460061ulao.cloudfront.net/140x150/${image[0]}/${image[1]}/${image}.jpg`
    : null
}

export const numberToCurrency = (price: number): string => {
  const dollarUsLocale = Intl.NumberFormat("en-US")
  return dollarUsLocale.format(price)
}
