"use client";

import { createDoctor, getDoctors, updateDoctor } from "@/actions/doctors";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";

export const useGetDoctors = () => {
  const result = useQuery({
    queryKey: ["getDoctors"],
    queryFn: getDoctors,
  });

  return result;
};

export const useCreateDoctor = () => {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: createDoctor,
    onSuccess: () => {
      // invalidate the related queries to refresh the data
      queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
    },
    onError: (error) => console.log("Error creating a doctor", error),
  });

  return result;
};

export const useUpdateDoctor = () => {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: updateDoctor,
    onSuccess: () => {
      // invalidate the related queries to refresh the data
      queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
    },
    onError: (error) => console.log("Error updating doctor", error),
  });

  return result;
};
