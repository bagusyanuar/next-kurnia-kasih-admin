export type MotorbikeCategory = {
    ID: string
    Name: string
    Thumbnail: string | null
}

export function mapToMotorbikeCategories(data: Array<any>): Array<MotorbikeCategory> {
    return data.map((datum) => {
        return mapToMotorbikeCategory(datum)
    })
}

export function mapToMotorbikeCategory(data: any): MotorbikeCategory {
    let thumbnail: string | null = null
    if (data['thumbnail'] !== null && data['thumbnail'] !== undefined) {
        thumbnail = data['thumbnail'] as string
    }
    return {
        ID: data['id'] as string,
        Name: data['name'] as string,
        Thumbnail: thumbnail
    }
}