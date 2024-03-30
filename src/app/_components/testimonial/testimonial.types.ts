import { Testimonial } from "@/types/testimonial.type";
import { testimonials } from '../../data/testimonials';
export type TestimonialProps = {
  testimonial: Testimonial;
};

export type TestimonialListProps={
    testimonials:Testimonial[]
}