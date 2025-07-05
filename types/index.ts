import {z} from 'zod';
import { insertPoductSchema } from '@/lib/validators';


export type Product = z.infer<typeof insertPoductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
}