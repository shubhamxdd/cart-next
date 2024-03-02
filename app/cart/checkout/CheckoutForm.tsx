import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type Input = {
  name: string;
  email: string;
  address: string;
  city: string;
  zip: string;
};
const CheckoutForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data) => console.log(data);

  const toastPromise = async () => {
    return toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const randNo = Math.floor(Math.random() * 2);

          if (randNo === 0) {
            return reject("Payment failed");
          }
          return resolve("Payment successful");
        }, 3000);
      }),
      {
        loading: "Processing payment...",
        success: "Payment successful",
        error: "Payment failed",
      }
    );
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 mt-6 mb-10"
      >
        <Input
          {...register("name", { required: true })}
          placeholder="First Name"
        />
        {errors.name && (
          <span className="text-red-400">This field is required</span>
        )}

        <Input {...register("email", { required: true })} placeholder="Email" />
        {errors.email && (
          <span className="text-red-400">This field is required</span>
        )}

        <Input
          {...register("address", { required: true })}
          placeholder="Address"
        />
        {errors.address && (
          <span className="text-red-400">This field is required</span>
        )}

        <Input {...register("city", { required: true })} placeholder="City" />
        {errors.city && (
          <span className="text-red-400">This field is required</span>
        )}

        <Input
          {...register("zip", { required: true })}
          placeholder="Zip Code"
        />
        {errors.zip && (
          <span className="text-red-400">This field is required</span>
        )}
      </form>
      <div className="flex justify-between my-2 items-center">
        <Button className="" variant={"ghost"} onClick={() => router.back()}>
          Go Back
        </Button>
        <Button
          className=""
          onClick={async () => {
            handleSubmit(onSubmit);
            await toastPromise()
              .then((res) => {
                if (res === "Payment successful") {
                  router.push("/cart/success");
                }
              })
              .catch((err) => {
                console.log(err);
                router.push("/cart/error");
              });
          }}
        >
          Make Payment
        </Button>
      </div>
    </>
  );
};

export default CheckoutForm;
