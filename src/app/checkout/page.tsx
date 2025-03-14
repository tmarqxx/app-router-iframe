import Button from "@/components/Button";
import Input from "@/components/Input";
import { submitPayment } from "@/server/actions/checkout";

type QueryParams = {
  vendorId: string | null;
};

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: SearchParamsProp;
}) {
  const params = (await searchParams) as QueryParams;
  const submitPaymentAction = submitPayment.bind(null, params.vendorId);

  return (
    <>
      <div className="flex w-full p-6">
        <div>
          <form action={submitPaymentAction} className="flex flex-col gap-4">
            <Input type="text" name="fullName" />
            <Button type="submit">Pay</Button>
          </form>
        </div>
        <div></div>
      </div>
    </>
  );
}
