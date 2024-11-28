This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

#এসাইনমেন্টে আপনাকে যা যা করতে হবেঃ

✓ রেসিপি দেখানোর জন্য Structured JSON লিস্ট পাবেন এই 'dist/data' ফোল্ডার এর ভেতরে । এই ফোল্ডারের ভেতরের JSON ফাইল গুলো Parse করে আপনাকে কন্টেন্ট লোড করতে হবে। এই এসাইনমেন্ট এ আপনি Network Call করে কোনো রেসিপি নিয়ে এসে দেখাতে পারবেন না ।

✓ হোম পেজে Super Delicious, Popular Categories, Hand-Picked Collections, Latest Recipes সেকশনে relevent ডেটা দিয়ে রেসিপি গুলো রেন্ডার করতে হবে ।

Hero সেকশনে যেকোনো একটি রেসিপি নিয়ে এসে দেখাতে পারেন ।

"Super Delicious" সেকশনে রেটিং কাউন্ট এর উপর ভিত্তি করে শুধু মাত্র ৩ টি রেসিপি দেখাতে হবে । প্রত্যেকটি কার্ড এ ক্লিক করলে সেই রেসিপি এর ডিটেইলস পেজে নিয়ে যাবে ।

"Popular Categories" সেকশনে ৬/৮টি পপুলার ক্যাটেগরি দেখাতে হবে। যে সকল ক্যাটেগরিতে সব থেকে বেশি রেসিপি আছে, সেগুলার মধ্যে থেকে ৬/৮টি নিয়ে এসে দেখাতে হবে। যেকোনো ক্যাটেগরিতে ক্লিক করলে ঐ ক্যাটেগরির রেসিপি (recipes.html) এর পেজে নিয়ে যাবে

Hand-Picked Collections এ আপনি আপনার মত মত যে কোনো দুইটি রেসিপি দেখাতে পারেন ।

"Latest Recipes" সেকশনে তারিখের উপর ভিত্তি করে ৪ টি Recent রেসিপি নিয়ে এসে দেখাতে হবে । প্রত্যেকটি কার্ড এ ক্লিক করলে সেই রেসিপি এর ডিটেইলস পেজে নিয়ে যাবে ।

✓ Hero সেকশনের "View Recipe" বাটনে ক্লিক করলে সেই রেসিপি এর ডিটেইলস পেজে নিয়ে যাবে ।

✓ সব সময় রেসিপি এর ডিটেইলস পেজ রাউট এর স্ট্রাকচার হবে - domain.com/:category/:recipe

✓ "Popular Categories" সেকশন থেকে "View All" বা Navbar থেকে "Categories" এ ক্লিক করলে ক্যাটেগরি লিস্টিং (category.html) পেজে নিয়ে যাবে, সেখানে সব ক্যাটেগরি নিয়ে এসে দেখাতে হবে ।

✓ যে কোনো ক্যাটেগরিতে কিক্ল করলে সেই ক্যাটেগরি ক্যাটেগরির কি কি রেসিপি আছে সেগুলো দেখানোর জন্যে recipes পেজে (recipes.html) নিয়ে যাবে । এবং সেই সাথে কত গুলো রেসিপি আছে সেগুলোর একটি সংখ্যা দেখাবে ।

✓ রেসিপি ডিটেইলস পেজে (blog-details.html) রেসিপির টাইটেল, লেখকের নাম, পাবলিশ এর তারিখ, ইমেজ এগুলো ডাইনামিক হবে। তবে এই পেজের বাকি কন্টেন্ট ডাইনামিক না করলেও চলবে । লেখকের নাম জন্যে যেকোনো Static ছবি ব্যবহার করলেই চলবে ।

✓ রেসিপি ডিটেইলস পেজে "You might also like" সেকশন এ ক্যাটাগরি এর ভিত্তিতে ৪ টি রেসিপি নিয়ে এসে দেখাতে হবে অর্থাৎ রেসিপি ডিটেইলস পেজে "Meat" ক্যাটেগরির একটি রেসিপি আছে, তাহলে "You might also like" সেকশনে "Meat" ক্যাটেগরির পপুলার কিছু রেসিপি নিয়ে এসে দেখাতে হবে । এবং সেগুলোতে ক্লিক করলেও যেন ঐ রেসিপি এর ডিটেইলস পেজে নিয়ে যায় ।
