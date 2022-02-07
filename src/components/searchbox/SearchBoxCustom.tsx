
function SearchBoxCustom({ keyword, setKeyword }: any) {
    return (
        <>
            <input
                type="text"
                key="random"
                value={keyword}
                placeholder={"Search Car or Model"}
                onChange={(e) => setKeyword(e.target.value)}
            />
        </>
    )
}

export default SearchBoxCustom