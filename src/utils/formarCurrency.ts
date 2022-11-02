export const formatCurrency = (amount: number, currency: string) => {
    return Intl.NumberFormat('es-VE', {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount)
}