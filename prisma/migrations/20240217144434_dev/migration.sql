-- CreateTable
CREATE TABLE `Blog` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `imgUrl` VARCHAR(191) NULL DEFAULT 'https://res.cloudinary.com/runyshark1/image/upload/v1708179216/free-no-image-1771002-1505134_1_illdvv.png',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
