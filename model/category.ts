export type Category = {
    ID: string
    Name: string
    Thumbnail: string | null
    IsMainProduct: boolean
}

export function mapToMotorbikeCategories(data: Array<any>): Array<Category> {
    return data.map((datum) => {
        return mapToCategory(datum)
    })
}

export function mapToCategory(data: any): Category {
    let thumbnail: string | null = null
    if (data['thumbnail'] !== null && data['thumbnail'] !== undefined) {
        thumbnail = data['thumbnail'] as string
    }
    return {
        ID: data['id'] as string,
        Name: data['name'] as string,
        Thumbnail: thumbnail,
        IsMainProduct: data['is_motorbike'] as boolean
    }
}