const Container = ({ children }) => {
    return (
        <div className='w-[96%] max-w-[1440px] mx-auto'>
            {children}
        </div>
    );
}

export default Container;