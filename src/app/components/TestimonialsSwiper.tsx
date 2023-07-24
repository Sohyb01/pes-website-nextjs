const TestimonialsSwiper = () => {
    return (
        <div className="flex justify-center gap-8">
            {/* Individual Testimonial */}
            <div className="flex w-full max-w-[336px] flex-col items-center gap-4 rounded-[16px] border-2 border-l-8 border-solid border-pes_lightgray border-l-pes_lightblue px-8 py-4 shadow-xl lg:max-w-[484px]">
                <div className="text-left text-sm text-pes_darkgray lg:text-base">
                    "Thank you so much for your help. It's exactly what I've
                    been looking for. You won't regret it. It really saves me
                    time and effort. PES is exactly what I have been looking
                    for."
                </div>
                <div className="flex w-full justify-between">
                    <h3 className="text-base lg:text-lg">Dr/ Folan Elfolany</h3>
                    <div className="flex flex-col items-center">
                        <div className="rating rating-sm lg:rating-md">
                            <input
                                disabled
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                disabled
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                disabled
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                disabled
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                disabled
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                checked
                            />
                        </div>
                        <h3 className="text-xs lg:text-sm">
                            12 Janurary at 6:23 PM
                        </h3>
                    </div>
                </div>
            </div>
            <div className="hidden w-full max-w-[336px] flex-col items-center gap-4 rounded-[16px] border-2 border-l-8 border-solid border-pes_lightgray border-l-pes_lightblue px-8 py-4 shadow-xl md:flex lg:max-w-[484px]">
                <div className="text-left text-sm text-pes_darkgray lg:text-base">
                    "Thank you so much for your help. It's exactly what I've
                    been looking for. You won't regret it. It really saves me
                    time and effort. PES is exactly what I have been looking
                    for."
                </div>
                <div className="flex w-full justify-between">
                    <h3 className="text-base lg:text-lg">Dr/ Folan Elfolany</h3>
                    <div className="flex flex-col items-center">
                        <div className="rating rating-sm lg:rating-md">
                            <input
                                disabled
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                disabled
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                disabled
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                disabled
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                disabled
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                checked
                            />
                        </div>
                        <h3 className="text-xs lg:text-sm">
                            12 Janurary at 6:23 PM
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsSwiper
