import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BannerController } from "./controller/Banner.controller";
import { ButtonController } from "./controller/Button.controller";
import { ItemController } from "./controller/Item.controller";
import { ItemCategoryController } from "./controller/ItemCategory.controller";
import { BannerRepository } from "./repository/Banner.repository";
import { ButtonRepository } from "./repository/Button.repository";
import { ItemRepository } from "./repository/Item.repository";
import { ItemCategoryRepository } from "./repository/ItemCategory.repository";
import { Banner, BannerSchema } from "./schema/Banner.schema";
import { Button, ButtonSchema } from "./schema/button.schema";
import { Item, ItemSchema } from "./schema/Item.schema";
import { ItemCategory, ItemCategorySchema } from "./schema/ItemCategory.schema";
import { BannerService } from "./service/Banner.service";
import { ButtonService } from "./service/Button.service";
import { ItemService } from "./service/Item.service";
import { ItemCategoryService } from "./service/ItemCategory.service";

@Module({
  imports: [MongooseModule.forFeature([
    { name: Button.name, schema: ButtonSchema },
    { name: Banner.name, schema: BannerSchema },
    { name: Item.name, schema: ItemSchema },
    { name: ItemCategory.name, schema: ItemCategorySchema },
  ])],
  controllers: [
    ButtonController, 
    BannerController, 
    ItemController, 
    ItemCategoryController
  ],
  providers: [
    ButtonService, 
    ButtonRepository,
    BannerService,
    BannerRepository,
    ItemService,
    ItemCategoryService,
    ItemRepository,
    ItemCategoryRepository
  ]
})
export class tbsModule { }
