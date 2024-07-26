type HeaderProps = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Header({ setModal } : HeaderProps) {
    return (
        <header className="my-4 text-xl">
            <div className="flex justify-between px-32 w-full">

                <div className="">
                    StatementManager
                </div>

                <div className="flex">
                    <div className="hidden md:flex">
                        <div role="separator" className="h-full w-px bg-border-border-primary">
                        </div>
                        <div className="inline-flex relative h-full items-center">
                            <button data-test-id="top-nav-creation-button" type="button" id="menu-:r3:" aria-haspopup="true"
                                aria-expanded="false" aria-controls="button-:r3:"
                                className="focus-visible:outline focus:outline-focus-action outline-2 type-interface-02 text-strong flex items-center h-full space-x-1.5 pl-4 md:pl-3.5 pr-3.5 md:pr-4.5 -outline-offset-2 hover:bg-gray-800 hover:text-white" onClick={() => setModal(false)}>
                                <svg
                                    fill="currentColor" className="w-5 h-5" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 7.5V4H7.5V7.5H4V8.5H7.5V12H8.5V8.5H12V7.5H8.5Z"></path>
                                </svg> <span>Nuevo</span>
                            </button>
                        </div>
                    </div>

                    <div role="separator" className="h-full w-px bg-border-border-primary"></div>

                    <div className="inline-flex relative h-full items-center"><button type="button" id="menu-:r4:" aria-haspopup="true"
                        aria-expanded="false" aria-controls="button-:r4:"
                        className="focus-visible:outline focus:outline-focus-action outline-2 type-interface-02 text-strong flex items-center h-full space-x-1.5 pl-4 md:pl-3.5 pr-3.5 md:pr-4.5 -outline-offset-2 hover:bg-gray-800 hover:text-white">
                        <div className="ml-0.5 flex items-center justify-start space-x-1.5">
                            <div className="flex-shrink-0 w-5 h-5">
                                <div className="inline-flex items-center">
                                    <img
                                        src="//en.gravatar.com/avatar/540bf52e981970b3ac7bbba36757a484?s=24&amp;r=x&amp;d=https%3A%2F%2Fdashboard.render.com%2Fdefault_gravatar.png"
                                        srcSet="//en.gravatar.com/avatar/540bf52e981970b3ac7bbba36757a484?s=48&amp;r=x&amp;d=https%3A%2F%2Fdashboard.render.com%2Fdefault_gravatar.png 2x"
                                        height="24" width="24" alt="Gravatar for joniosva@gmail.com"
                                        className="rounded-full select-none" />
                                </div>
                            </div><span className="truncate text-left max-w-[15.5rem] min-w-[6.89rem]">joniosva@gmail.com</span>
                        </div><svg fill="currentColor" className="w-5 h-5" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 10.9998L3 5.9998L3.7 5.2998L8 9.5998L12.3 5.2998L13 5.9998L8 10.9998Z"></path>
                        </svg>
                    </button>
                    </div>
                </div>

            </div>
        </header>
    )
}