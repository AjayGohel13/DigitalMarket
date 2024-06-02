import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const useAuth = () => {
    const router = useRouter()


    const signOut = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/users/logout`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Tyoe": "application/json"
                },
            }
            )
            if (!res.ok) throw new Error()
            toast.success("Signed out successfully")

            router.push("/sign-in")
            router.refresh()
        } catch (err) {
            toast.error("couldn't sign out, please try again.")
        }

    }

    return {signOut}

}
