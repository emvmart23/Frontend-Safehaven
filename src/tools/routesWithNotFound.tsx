import PageWithNotFound from "@/common/components/PageWithNotFound"
import { Route, Routes } from "react-router-dom"

interface Props {
    children: React.ReactNode
}

export function RoutesWithNotFound({ children }: Props) {
    return (
        <Routes>
            {children}
            <Route path="*" element={<PageWithNotFound />} />
        </Routes>
    )
}