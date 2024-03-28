

export const Sorted = (data) => {
    const book = data.sort((a, b) => {
        return  a.bookId.localeCompare(b.bookId)
    })
}