import { useActiveLinkContext } from '@/context/ActiveLinkContext'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { LinkName } from './types'


export function useSectionInView(linkName: LinkName, threshold = 0.75 ) {
    const { ref, inView } = useInView({
        threshold
    })
    const { setActiveLink, timeOfLastLink } = useActiveLinkContext()

    useEffect(() => {
        if (inView && Date.now() - timeOfLastLink > 1000) {
            setActiveLink(linkName)
        }
    }, [inView, setActiveLink, timeOfLastLink,linkName])

    return {ref}
}