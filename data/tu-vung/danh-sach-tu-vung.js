
/* Chỉ thêm tên file từ vựng vào danh sách này. */
const VOCAB_DATA_FILES = [
  // Bài 1
  "bai-1-trang-09.js", "bai-1-trang-10.js", "bai-1-trang-11.js",
  "bai-1-trang-12.js", "bai-1-trang-13.js", "bai-1-trang-14.js",
  "bai-1-trang-15.js", "bai-1-trang-16.js", "bai-1-trang-17.js",

  // Bài 2
  "bai-2-trang-33.js", "bai-2-trang-34.js", "bai-2-trang-35.js",
  "bai-2-trang-36.js", "bai-2-trang-37.js", "bai-2-trang-38.js",
  "bai-2-trang-39.js", "bai-2-trang-40.js",

  // Bài 3
  "bai-3-trang-53.js", "bai-3-trang-54.js", "bai-3-trang-55.js",
  "bai-3-trang-56.js", "bai-3-trang-57.js", "bai-3-trang-58.js",
  "bai-3-trang-59.js", "bai-3-trang-60.js", "bai-3-trang-61.js",

  // Chương 2 - Bài 1
  "c2bai1-trang-82.js", "c2bai1-trang-83.js", "c2bai1-trang-84.js",
  "c2bai1-trang-85.js", "c2bai1-trang-86.js", "c2bai1-trang-87.js",
  "c2bai1-trang-88.js", "c2bai1-trang-89.js",

  // Chương 2 - Bài 2
  "c2bai2-trang-104.js", "c2bai2-trang-105.js", "c2bai2-trang-106.js",
  "c2bai2-trang-107.js", "c2bai2-trang-108.js", "c2bai2-trang-109.js",
  "c2bai2-trang-110.js", "c2bai2-trang-111.js",

  // Chương 2 - Bài 3
  "c2bai3-trang-124.js", "c2bai3-trang-125.js", "c2bai3-trang-126.js",
  "c2bai3-trang-127.js", "c2bai3-trang-128.js", "c2bai3-trang-129.js",
  "c2bai3-trang-130.js", "c2bai3-trang-131.js",

  // Chương 3 - Bài 1
  "c3bai1-trang-150.js", "c3bai1-trang-151.js",
  "c3bai1-trang-152.js", "c3bai1-trang-153.js",
  "c3bai1-trang-154.js", "c3bai1-trang-155.js",
  "c3bai1-trang-156.js", "c3bai1-trang-157.js",
  "c3bai1-trang-158.js",

  // Chương 3 - Bài 2
  "c3bai2-trang-171.js", "c3bai2-trang-172.js",
  "c3bai2-trang-173.js", "c3bai2-trang-174.js",
  "c3bai2-trang-175.js", "c3bai2-trang-176.js",
  "c3bai2-trang-177.js", "c3bai2-trang-178.js",
  "c3bai2-trang-179.js",

  // Chương 3 - Bài 3
  "c3bai3-trang-192.js", "c3bai3-trang-193.js",
  "c3bai3-trang-194.js", "c3bai3-trang-195.js",
  "c3bai3-trang-196.js", "c3bai3-trang-197.js",
  "c3bai3-trang-198.js", "c3bai3-trang-199.js",

  // Chương 4 - Bài 1
  "c4bai1-trang-6.js", "c4bai1-trang-7.js",
  "c4bai1-trang-8.js", "c4bai1-trang-9.js",
  "c4bai1-trang-10.js", "c4bai1-trang-11.js",
  "c4bai1-trang-12.js", "c4bai1-trang-13.js",

  // Chương 4 - Bài 2
  "c4bai2-trang-25.js", "c4bai2-trang-26.js",
  "c4bai2-trang-27.js", "c4bai2-trang-28.js",
  "c4bai2-trang-29.js", "c4bai2-trang-30.js",
  "c4bai2-trang-31.js", "c4bai2-trang-32.js",

  // Chương 4 - Bài 3
  "c4bai3-trang-44.js", "c4bai3-trang-45.js",
  "c4bai3-trang-46.js", "c4bai3-trang-47.js",
  "c4bai3-trang-48.js", "c4bai3-trang-49.js",
  "c4bai3-trang-50.js", "c4bai3-trang-51.js",

  // Chương 5 - Bài 1
  "c5bai1-trang-73.js", "c5bai1-trang-74.js",
  "c5bai1-trang-75.js", "c5bai1-trang-76.js",
  "c5bai1-trang-77.js", "c5bai1-trang-78.js",
  "c5bai1-trang-79.js", "c5bai1-trang-80.js",

  // Chương 5 - Bài 2
  "c5bai2-trang-92.js", "c5bai2-trang-93.js",
  "c5bai2-trang-94.js", "c5bai2-trang-95.js",
  "c5bai2-trang-96.js", "c5bai2-trang-97.js",
  "c5bai2-trang-98.js", "c5bai2-trang-99.js",
  "c5bai2-trang-100.js", "c5bai2-trang-101.js",
  "c5bai2-trang-102.js", "c5bai2-trang-103.js",
  "c5bai2-trang-104.js", "c5bai2-trang-105.js",

  // Chương 5 - Bài 3
  "c5bai3-trang-112.js", "c5bai3-trang-113.js",
  "c5bai3-trang-114.js", "c5bai3-trang-115.js",
  "c5bai3-trang-116.js", "c5bai3-trang-117.js",
  "c5bai3-trang-118.js", "c5bai3-trang-119.js",
  "c5bai3-trang-120.js", "c5bai3-trang-121.js",
  "c5bai3-trang-122.js", "c5bai3-trang-123.js",
  "c5bai3-trang-124.js", "c5bai3-trang-125.js",
  "c5bai3-trang-126.js", "c5bai3-trang-127.js",

  // Chương 6 - Bài 1
  "c6bai1-trang-141.js", "c6bai1-trang-142.js",
  "c6bai1-trang-143.js", "c6bai1-trang-144.js",
  "c6bai1-trang-145.js", "c6bai1-trang-146.js",
  "c6bai1-trang-147.js", "c6bai1-trang-148.js",
  "c6bai1-trang-149.js", "c6bai1-trang-150.js",
  "c6bai1-trang-151.js", "c6bai1-trang-152.js",
  "c6bai1-trang-153.js", "c6bai1-trang-154.js",
  "c6bai1-trang-155.js", "c6bai1-trang-156.js",

  // Chương 6 - Bài 2
  "c6bai2-trang-163.js", "c6bai2-trang-164.js",
  "c6bai2-trang-165.js", "c6bai2-trang-166.js",
  "c6bai2-trang-167.js", "c6bai2-trang-168.js",
  "c6bai2-trang-169.js", "c6bai2-trang-170.js",
  "c6bai2-trang-171.js", "c6bai2-trang-172.js",
  "c6bai2-trang-173.js", "c6bai2-trang-174.js",
  "c6bai2-trang-175.js", "c6bai2-trang-176.js",

  // Chương 6 - Bài 3
  "c6bai3-trang-183.js", "c6bai3-trang-184.js",
  "c6bai3-trang-185.js", "c6bai3-trang-186.js",
  "c6bai3-trang-187.js", "c6bai3-trang-188.js",
  "c6bai3-trang-189.js", "c6bai3-trang-190.js",
  "c6bai3-trang-191.js", "c6bai3-trang-192.js",

  // Chương 7 - Bài 1
  "c7bai1-trang-5.js", "c7bai1-trang-6.js",
  "c7bai1-trang-7.js", "c7bai1-trang-8.js",
  "c7bai1-trang-9.js", "c7bai1-trang-10.js",
  "c7bai1-trang-11.js", "c7bai1-trang-12.js",
  "c7bai1-trang-13.js", "c7bai1-trang-14.js",
  "c7bai1-trang-15.js", "c7bai1-trang-16.js",
  "c7bai1-trang-17.js", "c7bai1-trang-18.js",
  "c7bai1-trang-19.js", "c7bai1-trang-20.js",
  "c7bai1-trang-21.js",

  // Chương 7 - Bài 2
  "c7bai2-trang-27.js", "c7bai2-trang-28.js",
  "c7bai2-trang-29.js", "c7bai2-trang-30.js",
  "c7bai2-trang-31.js", "c7bai2-trang-32.js",
  "c7bai2-trang-33.js", "c7bai2-trang-34.js",
  "c7bai2-trang-35.js", "c7bai2-trang-36.js",
  "c7bai2-trang-37.js", "c7bai2-trang-38.js",
  "c7bai2-trang-39.js", "c7bai2-trang-40.js",
  "c7bai2-trang-41.js", "c7bai2-trang-42.js",
  "c7bai2-trang-43.js",

  // Chương 7 - Bài 3
  "c7bai3-trang-48.js", "c7bai3-trang-49.js",
  "c7bai3-trang-50.js", "c7bai3-trang-51.js",
  "c7bai3-trang-52.js", "c7bai3-trang-53.js",
  "c7bai3-trang-54.js", "c7bai3-trang-55.js",
  "c7bai3-trang-56.js", "c7bai3-trang-57.js",
  "c7bai3-trang-58.js", "c7bai3-trang-59.js",
  "c7bai3-trang-60.js", "c7bai3-trang-61.js",
  "c7bai3-trang-62.js", "c7bai3-trang-63.js",
  "c7bai3-trang-64.js",

  // Chương 8 - Bài 1
  "c8bai1-trang-5.js", "c8bai1-trang-6.js",
  "c8bai1-trang-7.js", "c8bai1-trang-8.js",
  "c8bai1-trang-9.js", "c8bai1-trang-10.js",
  "c8bai1-trang-11.js", "c8bai1-trang-12.js",
  "c8bai1-trang-13.js", "c8bai1-trang-14.js",
  "c8bai1-trang-15.js", "c8bai1-trang-16.js",
  "c8bai1-trang-17.js", "c8bai1-trang-18.js",
  "c8bai1-trang-19.js", "c8bai1-trang-20.js",
  "c8bai1-trang-21.js", "c8bai1-trang-22.js",

  // Chương 8 - Bài 2
  "c8bai2-trang-28.js", "c8bai2-trang-29.js",
  "c8bai2-trang-30.js", "c8bai2-trang-31.js",
  "c8bai2-trang-32.js", "c8bai2-trang-33.js",
  "c8bai2-trang-34.js", "c8bai2-trang-35.js",
  "c8bai2-trang-36.js", "c8bai2-trang-37.js",
  "c8bai2-trang-38.js", "c8bai2-trang-39.js",
  "c8bai2-trang-40.js", "c8bai2-trang-41.js",
  "c8bai2-trang-42.js", "c8bai2-trang-43.js",
  "c8bai2-trang-44.js",

  // Chương 8 - Bài 3
  "c8bai3-trang-50.js", "c8bai3-trang-51.js",
  "c8bai3-trang-52.js", "c8bai3-trang-53.js",
  "c8bai3-trang-54.js", "c8bai3-trang-55.js",
  "c8bai3-trang-56.js", "c8bai3-trang-57.js",
  "c8bai3-trang-58.js", "c8bai3-trang-59.js",
  "c8bai3-trang-60.js", "c8bai3-trang-61.js",
  "c8bai3-trang-62.js", "c8bai3-trang-63.js",
  "c8bai3-trang-64.js", "c8bai3-trang-65.js",
  "c8bai3-trang-66.js", "c8bai3-trang-67.js",
  "c8bai3-trang-68.js", "c8bai3-trang-69.js",

  // Chương 9 - Bài 1
  "c9bai1-trang-155.js", "c9bai1-trang-156.js",
  "c9bai1-trang-157.js", "c9bai1-trang-158.js",
  "c9bai1-trang-159.js", "c9bai1-trang-160.js",
  "c9bai1-trang-161.js", "c9bai1-trang-162.js",
  "c9bai1-trang-163.js", "c9bai1-trang-164.js",
  "c9bai1-trang-165.js", "c9bai1-trang-166.js",
  "c9bai1-trang-167.js", "c9bai1-trang-168.js",
  "c9bai1-trang-169.js", "c9bai1-trang-170.js",
  "c9bai1-trang-171.js",

  // Chương 9 - Bài 2
  "c9bai2-trang-177.js", "c9bai2-trang-178.js",
  "c9bai2-trang-179.js", "c9bai2-trang-180.js",
  "c9bai2-trang-181.js", "c9bai2-trang-182.js",
  "c9bai2-trang-183.js", "c9bai2-trang-184.js",
  "c9bai2-trang-185.js", "c9bai2-trang-186.js",
  "c9bai2-trang-187.js", "c9bai2-trang-188.js",
  "c9bai2-trang-189.js", "c9bai2-trang-190.js",
  "c9bai2-trang-191.js", "c9bai2-trang-192.js",

  "c1bai1-tu-vung.js",
"c1bai2-tu-vung.js",
"c1bai3-tu-vung.js",
"c2bai1-tu-vung.js",
"c2bai2-tu-vung.js",
"c2bai3-tu-vung.js",
"c3bai1-tu-vung.js",
"c3bai2-tu-vung.js",
"c3bai3-tu-vung.js",
"c4bai1-tu-vung.js",
"c4bai2-tu-vung.js",
"c4bai3-tu-vung.js",
"c5bai1-tu-vung.js",
"c5bai2-tu-vung.js",
"c5bai3-tu-vung.js",
"c6bai1-tu-vung.js",
"c6bai2-tu-vung.js",
"c6bai3-tu-vung.js",
"c7bai1-tu-vung.js",
"c7bai2-tu-vung.js",
"c7bai3-tu-vung.js",
"c8bai1-tu-vung.js",
"c8bai2-tu-vung.js",
"c8bai3-tu-vung.js",
"c9bai1-tu-vung.js",
"c9bai2-tu-vung.js",

"n3-tu-vung-dong-nghia.js",
"n3-pho-tu-tuong-thanh-tuong-hinh.js",
"n3-tu-vung-katakana.js",
  // Bài tập về nhà - Bài 12 (để cuối cùng)
];

VOCAB_DATA_FILES.forEach((fileName) => {
  document.write('<script src="./data/tu-vung/' + fileName + '"><\/script>');
});
