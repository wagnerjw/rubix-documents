import { Fragment } from "react"
import { LuHouse } from "react-icons/lu"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function PageBreadcrumb({ paths }: { paths: string[] }) {
  return (
    <div className="pb-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <LuHouse className="h-4" />
            </BreadcrumbLink>
          </BreadcrumbItem>

          {paths.length > 2 ? (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/docs/${paths[0]}`} className="a">
                  {toTitleCase(paths[0])}
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis className="h-1" />
              </BreadcrumbItem>

              {paths.slice(-1).map((path, i) => {
                const index = paths.length - 1 + i
                const href = `/docs/${paths.slice(0, index + 1).join("/")}`

                return (
                  <Fragment key={path}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {index < paths.length - 1 ? (
                        <BreadcrumbLink href={href} className="a">
                          {toTitleCase(path)}
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage className="b">
                          {toTitleCase(path)}
                        </BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                  </Fragment>
                )
              })}
            </>
          ) : (
            paths.map((path, index) => {
              const href = `/docs/${paths.slice(0, index + 1).join("/")}`

              return (
                <Fragment key={path}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {index < paths.length - 1 ? (
                      <BreadcrumbLink href={href} className="a">
                        {toTitleCase(path)}
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="b">
                        {toTitleCase(path)}
                      </BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </Fragment>
              )
            })
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

function toTitleCase(input: string): string {
  const words = input.split("-")
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  )
  return capitalizedWords.join(" ")
}
