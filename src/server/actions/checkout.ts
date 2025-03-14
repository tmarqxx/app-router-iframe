"use server";

export async function submitPayment(
  vendorId: string | null,
  formData: FormData,
) {
  console.log(vendorId);
  console.log(formData.get("fullName"));
  console.log(formData.get("postalCode"));
}
