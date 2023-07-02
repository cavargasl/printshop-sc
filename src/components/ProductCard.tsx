import { Icons } from "@/components/Icons"
import { AspectRatio } from "@/components/ui/AspectRatio"
import { buttonVariants } from "@/components/ui/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import { formatPrice } from "@/lib/utils"
import { Product } from "@/models"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  product: Product
  categoryPath: string
}

export function ProductCard({ product, categoryPath }: ProductCardProps) {
  return (
    <Link
      aria-label={`Ver ${product.title} detalle`}
      href={`${categoryPath}/${product.slug}`}
    >
      <Card className="h-full overflow-hidden rounded-sm">
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={4 / 3}>
            {product.images.length ? (
              <Image
                src={product.images[0].url}
                alt={product.images[0].name}
                fill
                className="object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-secondary">
                <Icons.placeholder
                  className="h-9 w-9 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
            )}
          </AspectRatio>
        </CardHeader>
        <CardContent className="grid gap-2.5 p-4">
          <CardTitle>{product.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {`Desde: ${formatPrice(product.price ?? 0)}`}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-4">
          <div className={buttonVariants({
            variant: "secondary",
            size: "sm",
            className: "h-8 w-full rounded-sm",
          })}>
            Seleccionar
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
